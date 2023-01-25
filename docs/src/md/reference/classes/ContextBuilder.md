[@mstream/di](../README.md) / ContextBuilder

# Class: ContextBuilder

## Table of contents

### Constructors

- [constructor](ContextBuilder.md#constructor)

### Methods

- [build](ContextBuilder.md#build)
- [register](ContextBuilder.md#register)

## Constructors

### constructor

• **new ContextBuilder**()

## Methods

### build

▸ **build**(`options?`): `object`

#### Parameters

| Name              | Type      |
| :---------------- | :-------- |
| `options`         | `Object`  |
| `options.eagerly` | `boolean` |

#### Returns

`object`

---

### register

▸ **register**(`name`, `creator`): [`ContextBuilder`](ContextBuilder.md)

#### Parameters

| Name      | Type                           |
| :-------- | :----------------------------- |
| `name`    | `string`                       |
| `creator` | (`context`: `object`) => `any` |

#### Returns

[`ContextBuilder`](ContextBuilder.md)
