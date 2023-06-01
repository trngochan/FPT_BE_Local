import React from "react";
import classNames from "classnames/bind";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./evaluation.module.scss";
import Footer from "~/components/layouts/footer";
import Header from "~/components/layouts/header";
import Button from "~/components/button";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Evaluation() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [projectList, setProjectList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/project/${cookies.evaluation_id}/evalution`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((data) => {
        setProjectList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleShowStd(id) {
    console.log(id)
    setCookie('project_id', id)
    navigate('/teacherboardscore')
  }
  return (
    <>
      <Header />
      <div className={cx("row mt-5")}>
        <div className={cx("col-md-5 col-lg-5 col-xl-5")}>
          <h1>Danh sách dự án trong hội đồng 1 </h1>
        </div>

        <div className={cx("col-md-7 col-lg-7 col-xl-7")}>
          <ul>
            {projectList.map((project, index) => (
              <li key={index} onClick={()=> handleShowStd(project.id)}>
                <Button onClick={()=>{
                    setCookie('course_id', project.CourseId )
                }} small to={"/teacherboardscore"}>
                  {project.name}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
        <Footer />
      </div>
    </>
  );
}

export default Evaluation;