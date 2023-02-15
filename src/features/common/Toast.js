import React from 'react'
import { toast } from 'react-toastify';


// const Toast = () => {
//     const notify = () => toast("Movie Added To Wish List");
//     return (
//         <>
//             <button className="buttonadd btn btn-sm btn-primary" onClick={notify}>
//                 Add to wish
//             </button>
//         </>
//     )
// }

// export default Toast

export const ServicesOne = () => {
    const notify = () => toast("Movie Added To Wish List");
    return (
        notify
    );
};

export const Toast = () => {
    return (
        <></>
    );
};
