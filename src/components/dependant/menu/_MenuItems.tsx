//@ts-nocheck
import React from 'react'
import Menu from './Menu'

const _MenuItems = () => {
    return (
        <>
            <Menu title={"Fully Funded Scholorship"} link={"/category/female"} />
            <Menu title={"All Scholorship"} link={"/category/male"} />
            <Menu title={"Study Abroad"} link={"/category/kids"} />
            <Menu title={"Required Document"} link={"/products"} />
        </>
    )
}

export default _MenuItems