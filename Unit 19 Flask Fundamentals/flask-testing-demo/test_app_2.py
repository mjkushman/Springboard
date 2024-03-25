from app import app
from unittest import TestCase
from flask import session


class ColorViewsTestCase(TestCase):
    
    @classmethod
    def setUpClass(cls):
        print('INSIDE SETUP CLASS')

    @classmethod
    def tearDownClass(cls):
        print('INSIDE TEARDOWN CLASS')
    
    def setUp(self):
        print('INSIDE SETUP')

    def tearDown(self):
        print("INSIDE TEARDOWN")
    
    def test_color_form(self):
        with app.test_client() as client:
            # import pdb
            # pdb.set_trace()
            res = client.get('/')
            html = res.get_data(as_text=True)

            self.assertEqual(res.status_code, 200)
            self.assertIn('<h1>Color Form</h1>', html)

    def test_color_submit(self):
        with app.test_client() as client:
            res = client.post('/fav-color', data={'color':'red'})
            html = res.get_data(as_text=True)
            
            self.assertEqual(res.status_code, 200)
            self.assertIn("<h3>Woah! I like red, too</h3>", html)

    def test_redirection(self):
        with app.test_client() as client:
            res = client.get('/redirect-me')
            
            self.assertEqual(res.status_code,302)
            self.assertEqual(res.location,'http://localhost/') #make sure the new location is /

    def test_redirection_followed(self):
        with app.test_client() as client:
            res = client.get('/redirect-me', follow_redirects=True)
            html = res.get_data(as_text=True)

            self.assertEqual(res.status_code,200)
            self.assertIn('<h1>Color Form</h1>', html)

    def test_session_count(self):
        with app.test_client() as client:
            res = client.get('/')

            self.assertEqual(res.status_code,200) #check to make sure page is 200
            self.assertEqual(session['count'], 1) #make sure count comes back as 1

    def test_session_count_set(self):
            with app.test_client() as client:
                with client.session_transaction() as change_session: #allows us to set session values
                    change_session['count'] = 999 # set session['count'] to 999
                res = client.get('/') # visit page


                self.assertEqual(res.status_code,200) #check to make sure page is 200
                self.assertEqual(session['count'], 1000) #count should now be 1000

        