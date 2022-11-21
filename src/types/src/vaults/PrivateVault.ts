/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface PrivateVaultInterface extends utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "caller()": FunctionFragment;
    "getPrivateDataByIndex(uint64)": FunctionFragment;
    "getPrivateDataByIndexDirectly(uint64,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "getPrivateDataByName(address)": FunctionFragment;
    "getPrivateDataByNameDirectly(address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "labelIsExist(address)": FunctionFragment;
    "labelIsExistDirectly(address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "labelName(uint64)": FunctionFragment;
    "labelNameDirectly(uint64,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "minted()": FunctionFragment;
    "saveWithMinting(string,string,address)": FunctionFragment;
    "saveWithoutMinting(string,string,address)": FunctionFragment;
    "saveWithoutMintingDirectly(string,string,address,uint256,uint8,bytes32,bytes32,bytes)": FunctionFragment;
    "total()": FunctionFragment;
    "updateValidator(address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DOMAIN_SEPARATOR"
      | "caller"
      | "getPrivateDataByIndex"
      | "getPrivateDataByIndexDirectly"
      | "getPrivateDataByName"
      | "getPrivateDataByNameDirectly"
      | "labelIsExist"
      | "labelIsExistDirectly"
      | "labelName"
      | "labelNameDirectly"
      | "minted"
      | "saveWithMinting"
      | "saveWithoutMinting"
      | "saveWithoutMintingDirectly"
      | "total"
      | "updateValidator"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "caller", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPrivateDataByIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrivateDataByIndexDirectly",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrivateDataByName",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrivateDataByNameDirectly",
    values: [string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "labelIsExist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "labelIsExistDirectly",
    values: [string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "labelName",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "labelNameDirectly",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "minted", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "saveWithMinting",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "saveWithoutMinting",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "saveWithoutMintingDirectly",
    values: [
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "total", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateValidator",
    values: [string, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "caller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPrivateDataByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPrivateDataByIndexDirectly",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPrivateDataByName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPrivateDataByNameDirectly",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "labelIsExist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "labelIsExistDirectly",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "labelName", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "labelNameDirectly",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minted", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "saveWithMinting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "saveWithoutMinting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "saveWithoutMintingDirectly",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "total", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateValidator",
    data: BytesLike
  ): Result;

  events: {};
}

export interface PrivateVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PrivateVaultInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    caller(overrides?: CallOverrides): Promise<[string]>;

    getPrivateDataByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPrivateDataByIndexDirectly(
      index: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPrivateDataByName(
      name: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPrivateDataByNameDirectly(
      name: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    labelIsExist(
      labelHash: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    labelIsExistDirectly(
      labelHash: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    labelName(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    labelNameDirectly(
      index: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    minted(overrides?: CallOverrides): Promise<[boolean]>;

    saveWithMinting(
      data: string,
      cryptoLabel: string,
      labelHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    saveWithoutMinting(
      data: string,
      cryptoLabel: string,
      labelHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    saveWithoutMintingDirectly(
      data: string,
      cryptoLabel: string,
      labelHash: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    total(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateValidator(
      _privateValidator: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  caller(overrides?: CallOverrides): Promise<string>;

  getPrivateDataByIndex(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getPrivateDataByIndexDirectly(
    index: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getPrivateDataByName(
    name: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getPrivateDataByNameDirectly(
    name: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  labelIsExist(labelHash: string, overrides?: CallOverrides): Promise<boolean>;

  labelIsExistDirectly(
    labelHash: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  labelName(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  labelNameDirectly(
    index: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  minted(overrides?: CallOverrides): Promise<boolean>;

  saveWithMinting(
    data: string,
    cryptoLabel: string,
    labelHash: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  saveWithoutMinting(
    data: string,
    cryptoLabel: string,
    labelHash: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  saveWithoutMintingDirectly(
    data: string,
    cryptoLabel: string,
    labelHash: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    params: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  total(overrides?: CallOverrides): Promise<BigNumber>;

  updateValidator(
    _privateValidator: string,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    caller(overrides?: CallOverrides): Promise<string>;

    getPrivateDataByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getPrivateDataByIndexDirectly(
      index: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getPrivateDataByName(
      name: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getPrivateDataByNameDirectly(
      name: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    labelIsExist(
      labelHash: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    labelIsExistDirectly(
      labelHash: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    labelName(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    labelNameDirectly(
      index: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    minted(overrides?: CallOverrides): Promise<boolean>;

    saveWithMinting(
      data: string,
      cryptoLabel: string,
      labelHash: string,
      overrides?: CallOverrides
    ): Promise<void>;

    saveWithoutMinting(
      data: string,
      cryptoLabel: string,
      labelHash: string,
      overrides?: CallOverrides
    ): Promise<void>;

    saveWithoutMintingDirectly(
      data: string,
      cryptoLabel: string,
      labelHash: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      params: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    total(overrides?: CallOverrides): Promise<BigNumber>;

    updateValidator(
      _privateValidator: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    caller(overrides?: CallOverrides): Promise<BigNumber>;

    getPrivateDataByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrivateDataByIndexDirectly(
      index: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrivateDataByName(
      name: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrivateDataByNameDirectly(
      name: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    labelIsExist(
      labelHash: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    labelIsExistDirectly(
      labelHash: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    labelName(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    labelNameDirectly(
      index: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minted(overrides?: CallOverrides): Promise<BigNumber>;

    saveWithMinting(
      data: string,
      cryptoLabel: string,
      labelHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    saveWithoutMinting(
      data: string,
      cryptoLabel: string,
      labelHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    saveWithoutMintingDirectly(
      data: string,
      cryptoLabel: string,
      labelHash: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    total(overrides?: CallOverrides): Promise<BigNumber>;

    updateValidator(
      _privateValidator: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    caller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPrivateDataByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrivateDataByIndexDirectly(
      index: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrivateDataByName(
      name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrivateDataByNameDirectly(
      name: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    labelIsExist(
      labelHash: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    labelIsExistDirectly(
      labelHash: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    labelName(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    labelNameDirectly(
      index: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minted(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    saveWithMinting(
      data: string,
      cryptoLabel: string,
      labelHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    saveWithoutMinting(
      data: string,
      cryptoLabel: string,
      labelHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    saveWithoutMintingDirectly(
      data: string,
      cryptoLabel: string,
      labelHash: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    total(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateValidator(
      _privateValidator: string,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}