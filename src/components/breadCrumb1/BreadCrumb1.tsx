import React, { FC } from 'react'
import Link from 'next/link'

interface Crumbs {
    crumb: string,
    crumb2?: string,
    crumb3?: string,
    crumb4?: string,
    link?: string,
    link2?: string,
    link3?: string,
    link4?: string,
}

const BreadCrumb1: FC<Crumbs> = ({ crumb, crumb2, crumb3, crumb4, link, link2, link3, link4 }) => {
    return (
        <div className='flex text-gray-500 text-sm'>
            <span>
                <Link href="/" className=' hover:text-hover_text Transition capitalize'>
                    Home
                </Link>
                &nbsp;
                /
                &nbsp;
                <Link href={link || "#"} className=' hover:text-hover_text Transition capitalize'>
                    {crumb || "About"}
                </Link>
                {
                    crumb2 && <span>
                        &nbsp;
                        <Link href={link2 || "#"} className=' hover:text-hover_text Transition capitalize'>
                            {crumb2}
                        </Link>
                        &nbsp;
                        /
                        &nbsp;
                    </span>
                }

                {
                    crumb3 && <span>
                        &nbsp;
                        <Link href={link3 || "#"} className=' hover:text-hover_text Transition capitalize'>
                            {crumb3}
                        </Link>
                        &nbsp;
                        /
                        &nbsp;
                    </span>
                }

                {
                    crumb4 && <span>
                        &nbsp;
                        <Link href={link4 || "#"} className=' hover:text-hover_text Transition capitalize'>
                            {crumb4}
                        </Link>
                    </span>
                }
            </span>
        </div>
    )
}

export default BreadCrumb1