import React, {useState} from "react";

export const useToggleModal = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(true);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    return { isModalOpen, toggleModal}
}