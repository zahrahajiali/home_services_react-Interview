import { useEffect, useRef, useState } from "react";
function FakeSpan({ textValue, setFakeSpanDomWidth }) {
    const ref = useRef(null);
  
    useEffect(() => {
      if (ref.current) {
        const newWidth = getComputedStyle(ref.current).width;
        setFakeSpanDomWidth(newWidth);
      }
    }, [textValue]);
  
    return (
      <span ref={ref} className="invisible absolute whitespace-pre">
        {textValue}
      </span>
    );
  }

function FeaturefulSearchInput({
  serviceSearchInputValue,
  setServiceSearchInputValue,
  serviceSearchResults,
}) {
  const [fakeSpanDomWidth, setFakeSpanDomWidth] = useState("100%");
  const [suggestionInputPlaceholder, setSuggestionInputPlaceholder] =
    useState("");

  const inputRef = useRef(null);

  const handleSearchInputChange = (e) => {
    const value = e.currentTarget.value;
    setServiceSearchInputValue(value);
  };

  let firstSearchItemText = serviceSearchResults[0]?.name
    ? serviceSearchResults[0].name
    : "";

  let isInputValueSubstrinOfFirstSearchItem =
    serviceSearchInputValue ===
    firstSearchItemText.substring(0, serviceSearchInputValue.length);

  useEffect(() => {
    const newPlaceholder = isInputValueSubstrinOfFirstSearchItem
      ? firstSearchItemText
      : "";

    setSuggestionInputPlaceholder(newPlaceholder);
  }, [serviceSearchInputValue, serviceSearchResults]);

  let shouldInputExpand =
    fakeSpanDomWidth === "0px" || suggestionInputPlaceholder.length === 0;

  return (
    <div className="flex w-full">
      <div className="flex justify-between items-center w-full relative overflow-hidden">
        <input
          ref={inputRef}
          type_="search"
          className="absolute outline-none text-gray-700"
          style={{ width: shouldInputExpand ? "100%" : fakeSpanDomWidth }}
          value={serviceSearchInputValue}
          onChange={handleSearchInputChange}
          placeholder="به چه خدمتی نیاز دارید؟"
        />

        <FakeSpan
          textValue={serviceSearchInputValue}
          setFakeSpanDomWidth={setFakeSpanDomWidth}
        />

        <input
          placeholder={suggestionInputPlaceholder}
          className="w-full outline-none"
          focusable="false"
        />
      </div>
    </div>
  );
}
export default FeaturefulSearchInput