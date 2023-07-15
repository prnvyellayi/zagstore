const Notification = ({ notifs }) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9.35416 21C10.0593 21.6224 10.9855 22 12 22C13.0144 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3678 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88257 2.63214 7.75735 3.75736C6.63213 4.88258 5.99999 6.4087 5.99999 8C5.99999 11.0902 5.22046 13.206 4.34965 14.6054C3.61512 15.7859 3.24785 16.3761 3.26131 16.5408C3.27622 16.7231 3.31485 16.7926 3.46176 16.9016C3.59445 17 4.19258 17 5.38884 17H18.6111C19.8074 17 20.4055 17 20.5382 16.9016C20.6851 16.7926 20.7238 16.7231 20.7387 16.5408C20.7521 16.3761 20.3849 15.7859 19.6503 14.6054C18.7795 13.206 18 11.0902 18 8Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        {notifs > 0 ? 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="6 6 24 24" fill="none">
            <circle cx="24" cy="12" r="6" fill="black" stroke="white" />
            <text fill="white" x='21' y='15.5' scale={0.5} style={{fontSize: "9px"}}>{notifs}</text>
        </svg> : 
        <></>
        }
    </svg>);
}

export default Notification;