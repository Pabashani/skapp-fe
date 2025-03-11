import { useSession } from "next-auth/react";
import { useMemo } from "react";

import { AdminTypes, EmployeeTypes } from "~community/common/types/AuthTypes";
import { ManagerTypes } from "~community/common/types/CommonTypes";
import { TierEnum } from "~enterprise/common/enums/Common";

const useSessionData = () => {
  const { data: sessionData } = useSession();

  const isFreeTier = useMemo(
    () => sessionData?.user?.tier === TierEnum.FREE,
    [sessionData?.user?.tier]
  );

  const isProTier = useMemo(
    () => sessionData?.user?.tier === TierEnum.PRO,
    [sessionData?.user?.tier]
  );

  const isLeaveModuleEnabled = useMemo(
    () => sessionData?.user?.roles?.includes(EmployeeTypes.LEAVE_EMPLOYEE),
    [sessionData?.user?.roles]
  );

  const isAttendanceModuleEnabled = useMemo(
    () => sessionData?.user?.roles?.includes(EmployeeTypes.ATTENDANCE_EMPLOYEE),
    [sessionData?.user?.roles]
  );

  const isEsignatureModuleEnabled = useMemo(
    () => sessionData?.user?.roles?.includes(EmployeeTypes.ESIGN_EMPLOYEE),
    [sessionData?.user?.roles]
  );

  const employeeDetails = useMemo(
    () => sessionData?.user?.employee,
    [sessionData?.user?.employee]
  );

  const isSuperAdmin = useMemo(
    () => sessionData?.user?.roles?.includes(AdminTypes.SUPER_ADMIN),
    [sessionData?.user?.roles]
  );

  const isPeopleAdmin = useMemo(
    () => sessionData?.user?.roles?.includes(AdminTypes.PEOPLE_ADMIN),
    [sessionData?.user?.roles]
  );

  const isEmployee = useMemo(() => {
    return !sessionData?.user?.roles?.some((role) => {
      return [
        ...Object.values(AdminTypes),
        ...Object.values(ManagerTypes)
      ].includes(role as AdminTypes | ManagerTypes);
    });
  }, [sessionData?.user?.roles]);

  return {
    isFreeTier,
    isProTier,
    isAttendanceModuleEnabled,
    isLeaveModuleEnabled,
    isEsignatureModuleEnabled,
    employeeDetails,
    isSuperAdmin,
    isPeopleAdmin,
    isEmployee
  };
};

export default useSessionData;
