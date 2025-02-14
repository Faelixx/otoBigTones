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
            <div className="flex flex-row gap-2 justify-center outline-amber-400 rounded-md ">
                <div className='flex flex-row gap-x-4 justify-center outline-amber-400 rounded-md mx-[10px] w-10/12'>
                    <div className="w-[106px]">
                        <img className='object-cover h-28 min-w-28 object-top' src={thumbnail} alt={altText} />
                    </div>
                    <div className="flex flex-col items-start max-w-[320px] md:max-w-full">
                        <a className='text-white underline text-xl' href={url} target="_blank" rel="noreferrer">{title}</a>
                        <p className='text-amber-400 text-l'>{caption}</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default LinkPreview;