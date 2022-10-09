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

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "author", accessor: "author", width: "45%", align: "left" },
      { Header: "NIP", accessor: "nip", align: "left" },
      { Header: "jabatan", accessor: "jabatan", align: "center" },
      { Header: "alamat", accessor: "alamat", align: "center" },
      { Header: "aksi", accessor: "aksi", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        nip: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            31180397
          </MDTypography>
        ),
        jabatan: <Job title="Pegawai" />,
        alamat: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Kp. Mariuk
          </MDTypography>
        ),
        aksi: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit | Hapus
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        nip: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            31180398
          </MDTypography>
        ),
        jabatan: <Job title="Admin" />,
        alamat: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Kp. Gang Buntu
          </MDTypography>
        ),
        aksi: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit | Hapus
          </MDTypography>
        ),
      },
      {
        author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
        nip: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            31180714
          </MDTypography>
        ),
        jabatan: <Job title="Pegawai" />,
        alamat: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Tambun Selatan
          </MDTypography>
        ),
        aksi: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit | Hapus
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        nip: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            31180913
          </MDTypography>
        ),
        jabatan: <Job title="Pegawai" />,
        alamat: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Gandasari
          </MDTypography>
        ),
        aksi: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit | Hapus
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        nip: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            31180487
          </MDTypography>
        ),
        jabatan: <Job title="Pegawai" />,
        alamat: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Kp. Mariuk
          </MDTypography>
        ),
        aksi: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit | Hapus
          </MDTypography>
        ),
      },
      {
        author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        nip: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            31180339
          </MDTypography>
        ),
        jabatan: <Job title="Pegawai" />,
        alamat: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Cibitung
          </MDTypography>
        ),
        aksi: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit | Hapus
          </MDTypography>
        ),
      },
    ],
  };
}
