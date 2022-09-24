export default function Footer(
  {
    // name,
    // email,
    // website,
    // phone,
    // bankAccount,
    // bankName,
  }
) {
  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Shop Name:</span> E-SHOPPER
          </li>
          <li>
            <span className="font-bold">Your Email:</span>{" "}
            pythondjango117@gmail.com
          </li>
          <li>
            <span className="font-bold">Phone Eumber:</span> +919999786662
          </li>
          <li>
            <span className="font-bold">Bank:</span> CJC BANK(COMMERCIAL BANK OF
            PUNE)
          </li>
          <li>
            <span className="font-bold">Account holder Name:</span> E-SHOPPER
          </li>
          <li>
            <span className="font-bold">Account Number:</span> 5555-4535-7777
          </li>
          <li>
            <span className="font-bold">Website:</span>{" "}
            <a
              href="https://eshopper.global/en/"
              target="_blank"
              rel="noopenner noreferrer"
            >
              https://eshopper.global/en/
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
