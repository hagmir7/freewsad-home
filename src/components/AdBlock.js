import React, {useEffect} from 'react'
import { Modal, Button, Result } from 'antd';
import { t } from 'i18next';



export default function AdBlock() {
    const [modal, contextHolder] = Modal.useModal();


    useEffect(()=>{
        detectAdBlock();
    }, []);


    // Modal config
    const config = {
        title: t("AdBlock Detected!"),
        footer: false,
        content: (
            <Result
                status="error"
                title={t("AdBlock Detected!")}
                subTitle={t("adblock-message")}
                extra={[
                    <Button type="primary" key="console"  onClick={(e)=> window.location.reload() }>
                        {t("You have disabled")} <strong> AdBlock </strong>
                    </Button>,
                ]}
            >
            </Result>
        ),
    };
    



    // Ad block detect
    async function detectAdBlock() {
        let adBlockEnabled = false
        const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
        try {
            await fetch(new Request(googleAdUrl)).catch(_ => adBlockEnabled = true)
        } catch (e) {
            adBlockEnabled = true

        } finally {
            console.log(`AdBlock Enabled: ${adBlockEnabled}`)
            if(adBlockEnabled){
                modal.error(config);
            }
        }
    }
    return ( <> {contextHolder} </>

    );
}
