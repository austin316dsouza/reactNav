import Head from "next/head";
import { Box, Container } from "@mui/material";
import { VansListResults } from "../components/vans/vans-list-results";
import { VansListToolbar } from "../components/vans/vans-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
// import { customers } from '../__mocks__/customers';

import Loader from "../components/Loader";
// import { useGetDataListQuery} from "../services/CryptoApi"

const Students = () => {
//   const { data: vanList, isFetching } = useGetDataListQuery(1);

var vanList = [{
    Id:"1",
    VanNumber:"ewfw",
    CreatedOn:"euyfe"
}]

//   if (isFetching) return <Loader />;

  // console.log("the data is not", chauffeurList.Details);
  console.log("the data is not", vanList);

//   if(vanList.Error !== null && vanList.Error.ErrorCode == 10002)
//   {
//     location.reload()
//   }



  return(
    <>
      <Head>
        <title>Vans | DRIVE4U</title>
      </Head>
      {vanList.Error == null &&
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <VansListToolbar />
          <Box sx={{ mt: 3 }}>
            <VansListResults vans={vanList.Details.DataList} />
          </Box>
        </Container>
      </Box>
}
    </>
  );
};
// Vans.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Students;
