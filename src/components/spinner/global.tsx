// import React from "react";
// import { Backdrop } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import PropTypes from "prop-types";
// import useEmailCampaign from "state/emailCampaign/hooks/useEmailCampaign";
// import { Spinner } from "reactstrap";
// import useGptCampaign from "../../state/gpt-campaign/hooks/useGptCampaign";
// import useAuth from "../../state/auth/hooks/useAuth";

// const useStyles = makeStyles(() => ({
//   backdrop: {
//     width: "100vw",
//     height: "100vh",
//     position: "fixed",
//     zIndex: 1231,
//     overflow: "hidden",
//   },
//   spinner: {
//     display: "block",
//     top: "50%",
//     right: "50%",
//   },
// }));

// interface IProps {
//   isLoading: boolean;
// }

// const GlobalSpinner = ({ isLoading }: IProps) => {
//   const { auth } = useAuth();
//   const { gptCampaign } = useGptCampaign();
//   const { emailCampaign } = useEmailCampaign();
//   const classnames = useStyles();

//   const showSpinner =
//     isLoading ||
//     auth?.isLoading ||
//     gptCampaign?.isLoading ||
//     emailCampaign?.isLoading;

//   return showSpinner ? (
//     <Backdrop className={classnames.backdrop} open>
//       <Spinner color="primary" className={classnames.spinner} />
//     </Backdrop>
//   ) : null;
// };

// // defaultProps
// GlobalSpinner.defaultProps = {
//   isLoading: false,
// };

// // proptypes
// GlobalSpinner.propTypes = {
//   isLoading: PropTypes.bool.isRequired,
// };
// export default GlobalSpinner;
