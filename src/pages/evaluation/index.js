import React from "react";
import classNames from "classnames/bind";

import styles from './evaluation.module.scss';
import Footer from "~/components/layouts/footer";
import Header from "~/components/layouts/header";
import Button from "~/components/button";

const cx = classNames.bind(styles);

function Evaluation() {
    const projects = ["Bán máy tính", "Bán điện thoại", "Quản lý nhân sự", "Web chấm điểm"];
    // const evaluation = ["hội đồng 1", "hội đồng 2",]
    return (
        <>
        <Header />
        <div className={cx('row mt-5')}>
            <div className={cx('col-md-5 col-lg-5 col-xl-5')}>
                <h1>Danh sách dự án trong hội đồng 1 </h1>
            </div>
                       
            <div className={cx('col-md-7 col-lg-7 col-xl-7')}>
                <ul>
                    {projects.map((project, index) => (
                    <li key={index}>
                        <Button small to={"/teacherboardscore"}>
                            {project}
                        </Button>
                    </li>  
                    ))}
                </ul>
            </div>
        <div>
    </div>
        <Footer />
        </div> 
    </>

    );
}

export default Evaluation;