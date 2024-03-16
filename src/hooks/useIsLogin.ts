import { useMemo } from "react";
import { useAppSelector } from "../contexts/hooks";

export const useIsLogin = () => {
  const userDetail = useAppSelector((s) => s.user.data);
  const auth = useAppSelector((s) => s.user.data);
  const isLogin = useMemo(() => {
    return Boolean(userDetail && auth);
  }, [userDetail, auth]);

  return isLogin;
};
