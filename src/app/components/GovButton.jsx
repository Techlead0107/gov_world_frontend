import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';

function GovButton(props) {
    const { navigatePath, buttonName, length, height } = props;
    return (
        <>
            {/* <Stack className="GovButtonPrimary" spacing={6} direction="row"> */}

                <Button variant="contained" sx={{
                    height: height,
                    borderRadius: "7px",
                    background: "linear-gradient(90deg, #F1C6FF 0%, #BD0AF8 34.90%, #365CFC 99.41%), rgba(255, 255, 255, 0.25)",
                    borderRadius: "3px",
                    border: 0,
                    color: "white",
                    // height: "38px",
                    paddingLeft: length,
                    paddingRight:length,
                    boxShadow: "0 3px 5px 2px rgba(255, 51, 102, 0.3)",
                    transition: "box-shadow 0.3s ease-in-out",
                    "&:hover": {
                        boxShadow: "0 6px 10px 4px rgba(255, 51, 102, 0.3)",
                    },
                }}>
                    <Link href={navigatePath}></Link>
                    {buttonName}
                </Button>
            {/* </Stack> */}
        </>
    )
}

export default GovButton