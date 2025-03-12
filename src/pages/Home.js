import '../styles/Home.css'; // Import the CSS file for styling

export default function Home() {
    return (
        <div className="container my-4">
            <video className="background-video" autoPlay loop muted>
                <source src="/riceField.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>
            <h1>Welcome to Kagami Village!</h1>
            <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Porta etiam porta netus ex rhoncus. Leo hendrerit fames, montes turpis hendrerit ac. Parturient et sollicitudin mollis, vestibulum interdum pulvinar. Interdum mauris eu netus pretium varius etiam dapibus finibus. Rutrum egestas convallis ex sapien; varius porttitor conubia? Eleifend natoque platea posuere quis litora scelerisque euismod.
                Nibh at praesent eu faucibus molestie justo vulputate ante curae. Vitae felis vel finibus inceptos odio et? Sit tempus justo risus urna morbi. Hendrerit litora mus dolor sollicitudin vel accumsan libero venenatis fringilla. Vehicula euismod justo faucibus; sed ac duis ridiculus lectus. Laoreet ullamcorper senectus consectetur ut quam.
            </p>
        </div>
    )
}