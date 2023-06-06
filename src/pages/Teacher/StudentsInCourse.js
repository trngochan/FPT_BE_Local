import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Header from "~/components/layouts/header";
import Infor from "~/components/infor";

function StudentsInCourse() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [students, setStudent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req1 = await axios.get(
        `/student/${cookies.course.Id}/course`,
        {
          withCredentials: true,
        }
      );

      return axios.all([req1]).then(
        axios.spread((listStudent) => {
          // Xử lý response từ request1 và requests
          setStudent(listStudent.data);
        })
      );
    }

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Infor />
      <h2 className="mt-3 mb-3">List student of course {cookies.course.name}</h2>
      <table className="table table-striped">
        <thead>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Adress</th>
            </tr>
        </thead>
        <tbody>
            {students?.map((student, i) => {
                return <tr key={i}>
                    <td>{student.code}</td>
                    <td>{student.name}</td>
                    <td>{student.address}</td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsInCourse;
