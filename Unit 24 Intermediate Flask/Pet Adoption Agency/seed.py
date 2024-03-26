from models import  db, Pet
from app import app

app = app


with app.app_context():
    db.drop_all()
    db.create_all()

    p1 = Pet(name='Zeke', species='dog', photo_url='https://lh3.googleusercontent.com/pw/AIL4fc-mrRMoo3a508uMANK6E8Z_8n02mK-pr88XrdF1qvtPCTNA0_j5nGd4zfOvQUVZZnBisj19U9eyh5FCM_ZZrwss2iwQhfUEr7glLsg7fYEx5nL-6MQ_JEkUvqTQ6ztysINNvOH7GNjOR4pXU_LKyPn5Yw=w1458-h1936-s-no', age=2, notes='He is super cuddly', available=False)
    p2 = Pet(name='Albus', species='dog', photo_url='https://lh3.googleusercontent.com/pw/AIL4fc-odwnJ59ZKzLujUhuKTVCer8M5LqPslWsPnrpOfvOYKZAjWdJmKQSykWoQtHgZEupk53TihacGmt0Ak2Rma37L0xX2CF7Ag9yZfPTtR8u18Rq5_UO3orlArwF7mn8c2jKJLQdHHflvxsy74dp5E-dAhQ=w1458-h1936-s-no', age=5, notes='Loves to play', available=False)
    p3 = Pet(name='Charlie', species='cat', photo_url='https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80', age=12, notes='Sometimes cranky', available=True)
    p4 = Pet(name='Sonic', species='porcupine', photo_url='https://t3.ftcdn.net/jpg/02/76/86/86/240_F_276868673_t79Oz5JNkoBQnzXrLyr48iafDs27irVR.jpg', age=20, notes='Gotta go fast', available=True)

    db.session.add_all([p1,p2,p3,p4])
    db.session.commit()