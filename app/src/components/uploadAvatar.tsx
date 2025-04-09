import "./uploadAvatar.css";

export interface UploadAvatarProps {
  dataUrl: string | null;
  onChange: (dataUrl: string) => void;
}

export function UploadAvatar(props: UploadAvatarProps) {
  const onFileChange = (e: any) => {
    if (!e.target.files) {
      return;
    }

    const file: File = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        if (typeof reader.result !== "string") {
          return;
        }

        props.onChange(reader.result);
      },
      false
    );

    reader.readAsDataURL(file);
  };

  return (
    <div
      className="upload-avatar"
      style={!props.dataUrl ? "" : `background-image: url(${props.dataUrl});`}
    >
      {!props.dataUrl && (
        <p className="faded">
          {`blorbo bleebus bring GOOD luck
          NOT bad luck
          see, him face...
          and I am not dead today!
          good luck!`}
        </p>
      )}
      <div className="spacer"></div>
      <input
        style="display: none;"
        id="upload-avatar-input"
        type="file"
        onChange={onFileChange}
      />
      <button
        type="button"
        onClick={() => document.getElementById("upload-avatar-input").click()}
      >
        Upload Avatar...
      </button>
    </div>
  );
}
