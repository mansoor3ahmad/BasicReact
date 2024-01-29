function App(){
    const [likes,setLikes] = React.useState(0);
    function handleClick(){
        setLikes(likes+1);
    }
    function MileStone(){
        const decLikes = Math.floor(likes/10);
        if(decLikes/10==0)
            return <></>
        return <h1><i>Congrats on reaching {decLikes*10} likes </i></h1>
    }
    return (
        <>
            <h1>No of Likes</h1>
            <button onClick={handleClick}>Give a Like {likes}</button>
            <MileStone/>
        </>
    )
}