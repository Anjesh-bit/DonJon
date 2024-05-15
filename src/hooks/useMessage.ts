import { message } from "antd";
import { useCallback } from "react";

interface ShowMessageParams {
  content: string;
  type: "success" | "error" | "info" | "warning" | "loading" | undefined;
  className?: string;
}

const useMessage = (): {
  contextHolder: JSX.Element;
  showMessage: (params: ShowMessageParams) => void;
} => {
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = useCallback(
    ({ content, type, className }: ShowMessageParams) => {
      messageApi.open({
        type,
        content,
        className,
      });
    },
    [messageApi]
  );

  return { contextHolder, showMessage };
};

export default useMessage;
