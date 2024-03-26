const Tweet = ({authorUsername, authorName, date }) => {
    return(
        <div class="niceTweet"> 
            <p>{authorName} | {authorUsername} </p>
            <p><small>{date}</small></p>
        </div>
    )
}
