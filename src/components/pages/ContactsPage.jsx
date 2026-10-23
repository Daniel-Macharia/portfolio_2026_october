import { MailIcon, MessageCircleMoreIcon, PhoneIcon } from "lucide-react";

const ContactsPage = () => {

    return (<div className="col-12 d-flex flex-column gap-3 p-3 justify-content-center align-items-center">
        <h1 className="">Contacts</h1>
        <div className="col-12 d-flex flex-column flex-md-row gap-3">
            <div className="col-12 col-md-6 d-flex flex-column gap-3 card p-3">
                <p className="m-0">Call</p>
                <div className="col-12 d-flex flex-row gap-3 justify-content-center align-items-center">
                    <PhoneIcon className="w-6 h-6"/>
                    <p className="h-100 m-0">
                        +254712696965
                    </p>
                </div>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column gap-3 card p-3">
                <p className="m-0">Whatsapp</p>
                <div className="col-12 d-flex flex-row gap-3 justify-content-center align-items-center">
                    <MessageCircleMoreIcon className="w-6 h-6"/>
                    <p className="h-100 m-0">
                        +254712696965
                    </p>
                </div>
            </div>
        </div>

        <div className="col-12 d-flex flex-column flex-md-row gap-3">
            <div className="col-12 col-md-6 d-flex flex-column gap-3 card p-3">
                <p className="m-0">Email</p>
                <div className="col-12 d-flex flex-row gap-3 justify-content-center align-items-center">
                    <MailIcon className="w-6 h-6"/>
                    <p className="h-100 m-0">
                        ndungudanny444@gmail.com
                    </p>
                </div>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column gap-3 card p-3">
                <p className="m-0">LinkedIn</p>
                <div className="col-12 d-flex flex-row gap-3 justify-content-center align-items-center">
                    <MessageCircleMoreIcon className="w-6 h-6"/>
                    <p className="h-100 m-0">
                        Daniel-Macharia
                    </p>
                </div>
            </div>
        </div>
    </div>);
};

export default ContactsPage;