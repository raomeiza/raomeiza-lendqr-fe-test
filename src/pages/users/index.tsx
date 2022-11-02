import * as React from 'react';
import { KeyboardBackspace, Star, StarBorder } from "@mui/icons-material";
import { Typography, Box, Button, Avatar, Divider, CircularProgress } from "@mui/material";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Display } from "../../utils/device";
import axiosClient, { requestToken, isCancelError } from "../../utils/requestClient";

const iconSVG = () => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.04053 31.1796C2.47961 28.2202 3.79365 25.6264 5.97961 23.4C8.74053 20.6 12.0732 19.2 15.9796 19.2C19.886 19.2 23.2204 20.6 25.9796 23.4C28.1796 25.6266 29.5062 28.2204 29.9593 31.1796M24.1405 10.0204C24.1405 12.247 23.3468 14.1532 21.7593 15.7408C20.1734 17.3408 18.253 18.1408 16.0001 18.1408C13.7594 18.1408 11.8409 17.3408 10.2409 15.7408C8.65337 14.1533 7.85965 12.247 7.85965 10.0204C7.85965 7.76727 8.65341 5.84679 10.2409 4.25959C11.8409 2.67367 13.7596 1.87991 16.0001 1.87991C18.2532 1.87991 20.1737 2.67367 21.7593 4.25959C23.3468 5.84711 24.1405 7.76739 24.1405 10.0204Z"
        stroke="#213F7D"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const DetailSection = (props: { sections: any }) => {
  const { isDesktop } = Display();
  const { sections } = props;
  return sections.map((section: any, index1: any) => (
    <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "flex-start",
        gap: 4,
        // if contents are too long, wrap them
        flexWrap: "wrap",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
        {section.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "flex-start",
          gap: isDesktop ? 6 : 2,
          flex: 1,
          flexWrap: "wrap",
          opacity: 0.6,
        }}
      >
        {section.content.map(
          (
            item: {
              title:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
              value:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            },
            index: any
          ) => {
            // if there is no title or value, skip
            if (!item.title || !item.value) return null;
            return (
              <Box>
                <Typography variant="h6" component="h2" marginBottom={2}>
                  {item.title}
                </Typography>
                <Typography variant="h5" component="h3" >
                  {item.value}
                </Typography>
              </Box>
            );
          }
        )}
      </Box>
    </Box>
    {index1 !== sections.length - 1 && <Divider sx={{ width: "100%", fontWeight: 'bold' }} />}
    </>
  ));
};

export const User = (props: { width: any }) => {
  const [ user, setUser ] = React.useState<any>(null);
  const [ loading, setLoading ] = React.useState<boolean>(true);
  const [ error, setError ] = React.useState<any>(null);
  const [ rawUserDetail, setRawUserDetail ] = React.useState<any>(null);
  // get the user id from the url
  const { id } = useParams();
  React.useEffect(() => {
    async function getUser() {
      const thisRequestToken = requestToken().source();
      try {
        const response:any = await axiosClient({
          method: "GET",
          url: `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`,
          cancelToken: thisRequestToken.token,
        })
        setRawUserDetail(response.data || response);
        const { profile, email, phoneNumber, guarantor, socials, education } = response.data || response;
        const Personal = {
          title: "Personal Information",
          content: [
            { title: "FULL NAME", value: `${profile.firstName || ''} ${profile.lastName || ''}` },
            { title: "PHONE NUMBER", value: phoneNumber },
            { title: "EMAIL", value: email},
            { title: "BVN", value: profile.bvn },
            { title: "GENDER", value: profile.gender },
            { title: "MARITAL STATUS", value: profile.maritalStatus },
            { title: "CHILDREN", value: profile.children },
            { title: "TYPE OF RESIDENCE", value: profile.residenceType },
          ],
        }

        const Employment = {
          title: "EDUCATION AND EMPLOYMENT",
          content: [
            { title: "LEVEL OF EDUCATION", value: education.level },
            { title: "EMPLOYMENT STATUS", value: education.employmentStatus },
            { title: "SECTOR OF EMPLOYMENT", value: education.sector },
            { title: "DURATION OF EMPLOYMENT", value: education.duration },
            { title: "OFFICE EMAIL", value: education.officeEmail },
            { title: "MONTHLY INCOME", value: education.monthlyIncome.join(' - ') },
            { title: "LOAN REPAYMENT", value: education.loanRepayment },
          ],
        }

        const Social = {
          title: "SOCIAL",
          content: [
            ...Object.keys(socials).map((key) => {
              return { title: key.toUpperCase(), value: socials[key] }
            })
          ],
        }

        const guarantors = {
          title: "GUARANTOR",
          content: [
            { title: "FULL NAME", value: `${guarantor.firstName || ''} ${guarantor.lastName || ''}` },
            { title: "PHONE NUMBER", value: guarantor.phoneNumber },
            { title: "EMAIL", value: guarantor.email},
            { title: "ADDRESS", value: guarantor.address },
            { title: "RELATIONSHIP", value: guarantor.relationship },
          ],
        }

        setUser([
          Personal,
          Employment,
          Social,
          guarantors,
        ])
        setLoading(false);

      } catch (error: any) {
        if (!isCancelError(error)) {
          console.log(error);
        } else {
          console.log("Request cancelled", error.message);
        }
        setError(error.message || error);
        setLoading(false);
      }
      return () => {
        thisRequestToken.cancel("Operation canceled by the user.");
      }
    }
    getUser();
  }, [id, setUser]);

  React.useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate();
  return (
    <>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          alignSelf: "left",
          width: "100%",
          mb: 2,
          textAlign: "left",
          justifyContent: "start",
          alignItems: "flex-start",
          color: 'text.primary',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
        component={Button}
        onClick={() => {
          navigate(-1);
        }}
      >
        <KeyboardBackspace sx={{ mr: 1, opacity: 0.7 }} />
        Back to Users
      </Typography>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        fontWeight="bold"
        sx={{
          // take all the available space
          alignSelf: "left",
          width: "100%",
        }}
      >
        User details
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "flex-start",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "start",
            overflowX: "scroll",
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
            gap: 3,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "stretch",
              overflow: "scroll",
              width: "max-content",
              gap: 2,
              minWidth: 'max-content',
            }}
          >
            <Avatar
              sx={{
                width: 100,
                height: 100,
              }}
              src={rawUserDetail?.profile?.avatar || ""}
            >
              {iconSVG()}
            </Avatar>
            <Box
              sx={{
                alignSelf: "center",
                justifyContent: "center",
                justifyItems: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h2" fontWeight="bold" sx={{ mb: 1, minWidth: 'max-content' }}>
                {rawUserDetail?.profile?.firstName || 'JOHN'} {rawUserDetail?.profile?.lastName || 'DOE'}
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ mb: 1, opacity: 0.5 }}
              >
                {rawUserDetail?.accountNumber || '...'}
              </Typography>
            </Box>
          </Box>
          <Divider
            variant="middle"
            sx={{
              opacity: 0.7,
              width: 2,
            }}
            orientation="vertical"
            flexItem
          />
          <Box
            sx={{
              alignSelf: "center",
              justifyContent: "center",
              justifyItems: "center",
              alignItems: "center",
              textAlign: "center",
              minWidth: 120,
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              { /* can't get a glimps of posible values here */ }
              User's tier
            </Typography>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ mb: 1, color: "#FFC107", textAlign: "center" }}
            >
              <Star />
              <StarBorder />
              <StarBorder />
            </Typography>
          </Box>
          <Divider
            variant="middle"
            sx={{
              opacity: 0.7,
              width: 2,
            }}
            orientation="vertical"
            flexItem
          />
          <Box
            sx={{
              alignSelf: "center",
              justifyContent: "center",
              justifyItems: "center",
              alignItems: "center",
              textAlign: "center",
              minWidth: 200,
            }}
          >
            <Typography variant="h3" fontWeight="bold">
              { `${rawUserDetail?.profile?.currency || '...'}${rawUserDetail?.accountBalance || '...'} ` }
            </Typography>
            <Typography>9912345678/Providus Bank</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "white",
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "flex-start",
            gap: 4,
            padding: 3,
            borderRadius: 2,
          }}
        >
          {
            loading ? 
              <CircularProgress /> :
                error ?
                  <Typography>{error}</Typography> :
                  <DetailSection
                    sections={user}
                  />
                    
          }
        </Box>
        <Box></Box> {/* last gap */}
      </Box>
    </>
  );
};
