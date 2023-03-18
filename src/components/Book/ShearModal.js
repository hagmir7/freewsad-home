import React from 'react'
import { Button, Modal } from 'antd';
import { useTranslation } from 'react-i18next';

export default function ShearModal(props) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const { t } = useTranslation()

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                {t("Shear This Book")}
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <ul>
                    <li>
                        <a href={`whatsapp://send?text=${props.title +" " + encodeURIComponent(window.location.href)}`} target="_blank">Share on WhatsApp</a>
                    </li>
                    <li>
                        <a href={`https://www.facebook.com/sharer.php?u=${props.title +" " + encodeURIComponent(window.location.href)}`} target="_blank">Share on Facebook</a>
                    </li>
                    <li>
                        <a href={`https://twitter.com/intent/tweet?url=${props.title +" " + encodeURIComponent(window.location.href)}`} target="_blank">Share on Twitter</a>
                    </li>
                    <li>
                        <a href={`https://telegram.me/share/url?url=${props.title +" " + encodeURIComponent(window.location.href)}`} target="_blank">Share on Telegram</a>
                    </li>
                </ul>
            </Modal>
        </>
    );
};

