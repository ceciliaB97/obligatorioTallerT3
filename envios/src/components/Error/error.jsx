import React from "react";
import './error.css'

const ErrorModal = ({title,message,closeMsg }) => {

  return (
        <div id="myErrorModal" className="modal fade">
            <div className="modal-dialog modal-confirm">
                <div className="modal-content">
                    <div className="modal-header justify-content-center">
                        <div className="icon-box">
                            <i className="material-icons">&#xE5CD;</i>
                        </div>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body text-center">
                        <h4>{title}</h4>	
                        <p>{message}</p>
                        <button className="btn btn-success" data-dismiss="modal">{closeMsg}</button>
                    </div>
                </div>
            </div>
        </div> 
  );
};

export default ErrorModal;
