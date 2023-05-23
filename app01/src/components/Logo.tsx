import reactLogo from "../assets/react.svg";

export function Logo(props: any) {
  // const msg = props.msg;
  // const icon = props.icon;
  const { msg, icon } = props;
  return (
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h2>
          {msg} - {icon}
        </h2>
      </a>
    </div>
  );
}
