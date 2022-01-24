import { gql } from '@apollo/client';

const SEND_COUPON_CODE = gql`
  mutation sendCouponCode($phoneNumber: String!) {
    sendCouponCode(phoneNumber: $phoneNumber)
  }
`;

export { SEND_COUPON_CODE };