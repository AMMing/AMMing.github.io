import * as React from "react";

export class Helper {

    public static getUrl(data: any = null): string {
        var url = `/`;
        if (!!data) {
            var list = [];
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const item = data[key];
                    list.push(`${key}=${item}`);
                }
            }
            var args = list.join("&");
            url = `/?${args}`;
        }

        return url;
    }

    public static getUrlData(url: string = null) {
        if (!url) {
            url = window.location.href;
        }
        var uri = new URL(url);
        return uri.searchParams;
    }

    public static bindInput(react_el: React.Component<any, any>, e: React.ChangeEvent<HTMLInputElement>, key: string) {
        var data = {};
        data[key] = e.currentTarget.value;
        react_el.setState(data)
    }

    public static keyEnter(e: React.KeyboardEvent<HTMLInputElement>, callback: () => void) {
        if (e.keyCode == 13 && !!callback) {
            callback();
        }
    }
}