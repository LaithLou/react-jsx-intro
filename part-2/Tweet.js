function Tweet({ username, name, date, message }) {
    const style = {
        color: "orange",
        backgroundColor: "blue",
    };
    return <div>
        <span><b style={style}>{username}</b> {name}</span>
        <p style={style}>{message}</p>
        <span><i>{date}</i></span>
    </div>
}