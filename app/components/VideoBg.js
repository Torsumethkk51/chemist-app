export default function VideoBg(props) {
    const { bgUrl } = props

    return (
        <div>
            <div className="w-full h-full fixed z-[-999]">
                <video src={bgUrl} autoPlay loop muted />
            </div>
        </div>
    )
}