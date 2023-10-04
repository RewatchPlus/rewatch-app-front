export default function Header() {
    return (
        <div className="w-full flex justify-between">
            <div className="flex m-2">
                Home
            </div>
            <div className="flex flex-nowrap m-2">
                <div>LeaderBoard</div>
                <div>Discover</div>
                <div>Login</div>
            </div>
        </div>
    );
}