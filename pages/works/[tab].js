import { useRouter } from "next/router";
import ClockArc from "../../components/ClockArc";
import Practice from "../../components/Practice";
import SqaureGrid from "../../components/SquareGrid";

const WorkItem = () => {
  const router = useRouter();
  const { tab } = router.query;

  if (tab === "0") {
    return <Practice />;
  }
  if (tab === "1") {
    return <SqaureGrid />;
  }
  if (tab === "2") {
    return <ClockArc />;
  }
  return <div className="">Work In Progress</div>;
};

export default WorkItem;
