/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint no-underscore-dangle: 0 */

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function data() {
  const [pegawai, setPegawai] = useState([])
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    axios
      .get("/api/absensi", { headers: { "x-auth-token": token } })
      .then((res) => {
        setPegawai(res.data);
        axios.get("/api/users", { headers: { "x-auth-token": token } })
          .then((result) => {
            const id = res.data.map((item) => (item.user_id))
            console.log(id)
            console.log(result.data.map((item) => item._id === id))
          })
          .catch((err) => {
            if (err.response.status === 401) {
              navigate("/");
            }
          });

      })
      .catch((err) => {
        if (err.response.status === 401) {
          navigate("/");
        }
      });
  }, [token]);

  console.log(pegawai)

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "nama", accessor: "nama", width: "25%", align: "left" },
      { Header: "tanggal", accessor: "tanggal", align: "center" },
      { Header: "keterangan", accessor: "keterangan", align: "center" },
      { Header: "jam masuk", accessor: "jamMasuk", align: "center" },
      { Header: "jam keluar", accessor: "jamKeluar", align: "center" },
    ],

    rows: [
      {
        nama: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        tanggal: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            27-10-2022
          </MDTypography>
        ),
        keterangan: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="hadir" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        jamMasuk: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            06:38
          </MDTypography>
        ),
        jamKeluar: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            16:05
          </MDTypography>
        ),
      },
      {
        nama: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        keterangan: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="izin" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
        jamMasuk: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            -
          </MDTypography>
        ),
        jamKeluar: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            -
          </MDTypography>
        ),
      },
      {
        nama: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
        keterangan: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="hadir" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        jamMasuk: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            06:28
          </MDTypography>
        ),
        jamKeluar: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            16:15
          </MDTypography>
        ),
      },
      {
        nama: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        keterangan: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="hadir" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        jamMasuk: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            06:48
          </MDTypography>
        ),
        jamKeluar: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            16:03
          </MDTypography>
        ),
      },
      {
        nama: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        keterangan: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Alfa" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        jamMasuk: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            -
          </MDTypography>
        ),
        jamKeluar: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            -
          </MDTypography>
        ),
      },
      {
        nama: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        keterangan: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="hadir" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        jamMasuk: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            06:40
          </MDTypography>
        ),
        jamKeluar: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            16:09
          </MDTypography>
        ),
      },
    ],
  };
}
