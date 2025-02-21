import { TCryptoResponse, TTopListSearchParams } from "@/types/response.ts";
import { Search01Icon } from "hugeicons-react";
import { useSearch } from "@/hooks/useSearch.tsx";
import { Dispatch, Fragment, RefObject, SetStateAction, useImperativeHandle, useState } from "react";
import Modal from "@/components/Modal.tsx";
import MinRowCard from "@/components/Cards/MinRowCard.tsx";

type SearchProps = {
  params: TTopListSearchParams;
  setParams: Dispatch<SetStateAction<TTopListSearchParams>>;
  ref: RefObject<{ list: TCryptoResponse[] | undefined } | null>;
};

const Search = ({ params, setParams, ref }: SearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isPending, error } = useSearch(params);

  useImperativeHandle(
    ref,
    () => {
      return {
        list: data?.Data.LIST,
      };
    },
    [data]
  );

  return (
    <Fragment>
      <button className="border border-light-grey cursor-pointer transition-all bg-light-grey py-2 px-5 rounded-lg" onClick={()=>setIsOpen(true)}>Search</button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div
          className={
            "bg-white border border-light-grey flex text-grey-subtitle items-center w-full gap-4 rounded-lg p-2.5"
          }
        >
          <Search01Icon />
          <input
            className={"w-full"}
            placeholder={"Search coin"}
            value={params.search_string}
            onChange={(e) => setParams({ ...params, search_string: e.target.value })}
          />
        </div>
        <div className={"mt-10 h-80 overflow-auto"}>
          {isPending ? (
            <div>Loading ...</div>
          ) : data?.Data.LIST.length === 0 ? (
            <div>No item found</div>
          ) : (
            data?.Data.LIST.map((item) => <MinRowCard data={item} key={item.ID} />)
          )}
        </div>
      </Modal>
    </Fragment>
  );
};

export default Search;
