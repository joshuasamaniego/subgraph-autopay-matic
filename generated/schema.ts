// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class DataFeedFundedEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_queryId", Value.fromBytes(Bytes.empty()));
    this.set("_feedId", Value.fromBytes(Bytes.empty()));
    this.set("_amount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DataFeedFundedEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DataFeedFundedEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DataFeedFundedEntity", id.toString(), this);
    }
  }

  static load(id: string): DataFeedFundedEntity | null {
    return changetype<DataFeedFundedEntity | null>(
      store.get("DataFeedFundedEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _queryId(): Bytes {
    let value = this.get("_queryId");
    return value!.toBytes();
  }

  set _queryId(value: Bytes) {
    this.set("_queryId", Value.fromBytes(value));
  }

  get _feedId(): Bytes {
    let value = this.get("_feedId");
    return value!.toBytes();
  }

  set _feedId(value: Bytes) {
    this.set("_feedId", Value.fromBytes(value));
  }

  get _amount(): BigInt {
    let value = this.get("_amount");
    return value!.toBigInt();
  }

  set _amount(value: BigInt) {
    this.set("_amount", Value.fromBigInt(value));
  }
}

export class NewDataFeedEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_token", Value.fromBytes(Bytes.empty()));
    this.set("_queryId", Value.fromBytes(Bytes.empty()));
    this.set("_feedId", Value.fromBytes(Bytes.empty()));
    this.set("_queryData", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NewDataFeedEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NewDataFeedEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NewDataFeedEntity", id.toString(), this);
    }
  }

  static load(id: string): NewDataFeedEntity | null {
    return changetype<NewDataFeedEntity | null>(
      store.get("NewDataFeedEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _token(): Bytes {
    let value = this.get("_token");
    return value!.toBytes();
  }

  set _token(value: Bytes) {
    this.set("_token", Value.fromBytes(value));
  }

  get _queryId(): Bytes {
    let value = this.get("_queryId");
    return value!.toBytes();
  }

  set _queryId(value: Bytes) {
    this.set("_queryId", Value.fromBytes(value));
  }

  get _feedId(): Bytes {
    let value = this.get("_feedId");
    return value!.toBytes();
  }

  set _feedId(value: Bytes) {
    this.set("_feedId", Value.fromBytes(value));
  }

  get _queryData(): Bytes {
    let value = this.get("_queryData");
    return value!.toBytes();
  }

  set _queryData(value: Bytes) {
    this.set("_queryData", Value.fromBytes(value));
  }
}

export class OneTimeTipClaimedEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_queryId", Value.fromBytes(Bytes.empty()));
    this.set("_token", Value.fromBytes(Bytes.empty()));
    this.set("_amount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save OneTimeTipClaimedEntity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type OneTimeTipClaimedEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("OneTimeTipClaimedEntity", id.toString(), this);
    }
  }

  static load(id: string): OneTimeTipClaimedEntity | null {
    return changetype<OneTimeTipClaimedEntity | null>(
      store.get("OneTimeTipClaimedEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _queryId(): Bytes {
    let value = this.get("_queryId");
    return value!.toBytes();
  }

  set _queryId(value: Bytes) {
    this.set("_queryId", Value.fromBytes(value));
  }

  get _token(): Bytes {
    let value = this.get("_token");
    return value!.toBytes();
  }

  set _token(value: Bytes) {
    this.set("_token", Value.fromBytes(value));
  }

  get _amount(): BigInt {
    let value = this.get("_amount");
    return value!.toBigInt();
  }

  set _amount(value: BigInt) {
    this.set("_amount", Value.fromBigInt(value));
  }
}

export class TipAddedEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_token", Value.fromBytes(Bytes.empty()));
    this.set("_queryId", Value.fromBytes(Bytes.empty()));
    this.set("_amount", Value.fromBigInt(BigInt.zero()));
    this.set("_queryData", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TipAddedEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TipAddedEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TipAddedEntity", id.toString(), this);
    }
  }

  static load(id: string): TipAddedEntity | null {
    return changetype<TipAddedEntity | null>(store.get("TipAddedEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _token(): Bytes {
    let value = this.get("_token");
    return value!.toBytes();
  }

  set _token(value: Bytes) {
    this.set("_token", Value.fromBytes(value));
  }

  get _queryId(): Bytes {
    let value = this.get("_queryId");
    return value!.toBytes();
  }

  set _queryId(value: Bytes) {
    this.set("_queryId", Value.fromBytes(value));
  }

  get _amount(): BigInt {
    let value = this.get("_amount");
    return value!.toBigInt();
  }

  set _amount(value: BigInt) {
    this.set("_amount", Value.fromBigInt(value));
  }

  get _queryData(): Bytes {
    let value = this.get("_queryData");
    return value!.toBytes();
  }

  set _queryData(value: Bytes) {
    this.set("_queryData", Value.fromBytes(value));
  }
}

export class TipClaimedEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_feedId", Value.fromBytes(Bytes.empty()));
    this.set("_queryId", Value.fromBytes(Bytes.empty()));
    this.set("_token", Value.fromBytes(Bytes.empty()));
    this.set("_amount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TipClaimedEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TipClaimedEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TipClaimedEntity", id.toString(), this);
    }
  }

  static load(id: string): TipClaimedEntity | null {
    return changetype<TipClaimedEntity | null>(
      store.get("TipClaimedEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _feedId(): Bytes {
    let value = this.get("_feedId");
    return value!.toBytes();
  }

  set _feedId(value: Bytes) {
    this.set("_feedId", Value.fromBytes(value));
  }

  get _queryId(): Bytes {
    let value = this.get("_queryId");
    return value!.toBytes();
  }

  set _queryId(value: Bytes) {
    this.set("_queryId", Value.fromBytes(value));
  }

  get _token(): Bytes {
    let value = this.get("_token");
    return value!.toBytes();
  }

  set _token(value: Bytes) {
    this.set("_token", Value.fromBytes(value));
  }

  get _amount(): BigInt {
    let value = this.get("_amount");
    return value!.toBigInt();
  }

  set _amount(value: BigInt) {
    this.set("_amount", Value.fromBigInt(value));
  }
}
