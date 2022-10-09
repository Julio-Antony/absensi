/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
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
      { Header: "nama", accessor: "nama", width: "45%", align: "left" },
      { Header: "keterangan", accessor: "keterangan", align: "center" },
      { Header: "jam masuk", accessor: "jamMasuk", align: "center" },
      { Header: "jam keluar", accessor: "jamKeluar", align: "center" },
    ],

    rows: [
      {
        nama: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
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
