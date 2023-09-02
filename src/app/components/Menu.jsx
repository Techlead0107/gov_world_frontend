import React from 'react'

import Link from 'next/link';

import { useTranslation } from "react-i18next";
import GovButton from './GovButton';




function Menu() {
    const { t } = useTranslation();
    return (
        <>
            <div className="menu">
                <nav id="site-navigation" className="navigation main-navigation main-navigation-one">
                    <div id="cmm-main_menu" className="cmm-container" aria-expanded="false">
                        <ul>
                            <li className="MenuText" ><Link href={'/'}> {t("ABOUT")}</Link></li>
                            <li className="MenuText" ><Link href={'/'}>{t("COMMUNITY")}</Link></li>
                            <li className="MenuText" ><Link href={'/'}>{t("PARTNERS")}</Link></li>
                            <li className="MenuText" ><Link href={'/'}>{t("LENDERS")}</Link></li>
                            <li className="MenuText" ><Link href={'/'}>{t("DOCS")}</Link></li>
                            <li className="MenuText" ><Link href={'/'}>{t("BRIDGE")}</Link></li>
                        </ul>
                    </div>
                </nav>

            </div>

            <div className="headerRight">
                {/* <ul>
                    <li className='button '><Link href={'/'} className='btn btn-outline-light LaunchButton'>{t("Launch App")}</Link></li>
                </ul> */}
                <GovButton
                    navigatePath="/"
                    buttonName="Launch App"
                    length="3"
                    height="48"
                />
            </div>
        </>
    )
}

export default Menu