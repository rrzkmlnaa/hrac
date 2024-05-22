import Button from "@/components/buttons/Button";

import { SingleServiceType } from '@/views/services/career-development/components/SingleService';

interface ModalProps {
    card: SingleServiceType;
    onClose: () => void;
}

export default function Modal({ card, onClose }: ModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <div className="relative w-full max-w-md p-6 bg-white rounded-md shadow-lg border-none" onClick={(e) => e.stopPropagation()}>
                <Button variant="ghost" className="absolute top-0 right-0 px-3 py-2" onClick={onClose}>X</Button>
                <h3 className="text-xl font-semibold text-center pb-3">{card.title}</h3>
                {card.body && <div dangerouslySetInnerHTML={{ __html: card.body }} />}
            </div>
        </div>
    );
}
