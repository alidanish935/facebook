import Sidebar from './Component/Sidebar';
import Navbar from './Component/Navbar';
import Rightbar from './Component/Rightbar';
import Feed from './Component/Feed';

import { Box, Stack } from '@mui/system';

function App() {
  
  return (
    // className="App"
    <div >
      {/* <Practice/> */}
      <Box >
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent='space-between' >

          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </Stack>
      </Box>

    </div>
  );
}

export default App;
