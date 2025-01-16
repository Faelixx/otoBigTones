import { React } from "react";
import AOS from 'aos'

const LinkPreview = ({
    title,
    url,
    source,
    thumbnail,
    caption
    }) => {


    AOS.init();
    const altText = `${source} Image`;
    

    return (
        <>  
            <div data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className="flex flex-row gap-x-2 justify-center outline-amber-400 rounded-md ">
                <div data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className='flex flex-row gap-x-2 justify-center outline-amber-400 rounded-md mx-[10px] w-10/12'>
                    <div>
                        <img data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className='object-cover h-28 w-28 object-top' src={thumbnail} alt={altText} />
                    </div>
                    <div data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className="text-justify">
                        <a data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className='text-white text-center underline text-xl' href={url} target="_blank" rel="noreferrer">{title}</a>
                        <p data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className='text-amber-400 text-l'>{caption}</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default LinkPreview;