'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

type TBreadCrumbProps = {
    homeElement: ReactNode,
    separator: ReactNode,
    containerClasses?: string,
    listClasses?: string,
    activeClasses?: string,
    capitalizeLinks?: boolean
};

const NextBreadcrumb = ({ homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks }: TBreadCrumbProps) => {
    const paths = usePathname();

    if (!paths) {
        return null;
    }

    const pathNames = paths.split('/').filter(path => path);

    const isHome = pathNames.length === 0;

    if (isHome) {
        return null;
    }

    return (
        <div>
            <ul className={containerClasses}>
                <li className={listClasses}><Link href='/'>{homeElement}</Link></li>
                {pathNames.length > 0 && separator}
                {
                    pathNames.map((link, index) => {
                        const href = `/${pathNames.slice(0, index + 1).join('/')}`
                        const itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses;
                        const itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1) : link;
                        const spacedItemLink = itemLink.replace(/-/g, ' ');
                        return (
                            <React.Fragment key={index}>
                                <li className={itemClasses} >
                                    <Link href={href}>{spacedItemLink}</Link>
                                </li>
                                {pathNames.length !== index + 1 && separator}
                            </React.Fragment>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default NextBreadcrumb;
