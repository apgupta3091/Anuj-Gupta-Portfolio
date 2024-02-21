import Image from "next/image";

const Homepage = () => {
    return (
        <div className="h-full flex flex-col lg:flex-row lg:justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/* Image Container */}
            <div className="h-1/2 lg:h-full lg:w-1/2 relative">
                <Image src="/hero.png" alt="" fill className="object-contain" />
            </div>
            {/* Text Container */}
            <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital experiences, Designing Tomorrow.</h1>
                {/* Description */}
                <p className="md:text-xl">Welcome to my digital canvas, where innovation and creativity converge. With a keen eye ofr aesthestics and a master of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence. </p>
                {/* Buttons */}
                <div className="w-full flex gap-4">
                    <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
                    <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;