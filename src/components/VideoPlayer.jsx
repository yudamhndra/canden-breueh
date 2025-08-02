import {motion} from "framer-motion";

function VideoPlayer() {
    return (
        <div className="bg-baseColor flex justify-center relative overflow-hidden rounded-lg px-2 md:px-4 lg:px-12">
            <div className="container items-center justify-center gap-10">
                {/*<motion.div*/}
                {/*    initial={{opacity: 0, x: 100}}*/}
                {/*    whileInView={{opacity: 1, x: 0}}*/}
                {/*    transition={{type: "spring", stiffness: 100, delay: 0.2}}*/}
                {/*    className="h-full flex flex-col justify-center space-y-4"*/}
                {/*>*/}
                {/*    <p className="text-orange-600 font-semibold">*/}
                {/*        VIDEO PLAYER*/}
                {/*    </p>*/}
                {/*    <div className="text-primary text-3xl font-semibold">*/}
                {/*        Check out this video!*/}
                {/*    </div>*/}
                {/*    <div className="">*/}
                {/*        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.*/}
                {/*    </div>*/}
                {/*</motion.div>*/}
                <div className="flex justify-center items-center">
                <iframe width="800" height="450" src="https://www.youtube.com/embed/OL0QhB_lryc?si=A3190AYZlbHQBOlF"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;