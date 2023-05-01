import React from "react";
import { useState } from "react";

const Modal = ({ modalOpen, setModalOpen, children,  }) => {
	const modalClose = () => {
		setModalOpen(false);
	};
	return (
		<div className={`modal ${modalOpen ? "modal-open" : ""}`}>
			<div className="modal-box relative ">
				<label
					htmlFor="my-modal-3"
					className="btn btn-sm btn-circle absolute right-2 top-2"
					onClick={modalClose}
				>
					✕
				</label>
				{children}
			</div>
		</div>
	);
};

export default Modal;
