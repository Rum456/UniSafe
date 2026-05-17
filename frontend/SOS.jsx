function SOS() {
  const handleSOS = () => {
    alert("SOS Alert Sent!");
  };

  return (
    <div>
      <h1>SOS Emergency</h1>

      <button onClick={handleSOS}>
        Send SOS
      </button>
    </div>
  );
}

export default SOS;