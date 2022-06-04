const Header = {
  render: function () {
    return /*html*/ `
        <section class="w-full bg-primary">
        <div class="flex justify-between items-center py-4 container mx-auto">
            <div>
            <a href="#">
                <img class="max-w-[70px]" src="/public/images/logo.svg" alt="Logo" />
            </a>
            </div>

            <div class="w-full flex justify-center items-center">
            <label class="relative flex max-w-[746px] w-[100%] justify-end">
                <input
                class="max-w-[626px] placeholder:italic placeholder:text-sm outline-none block bg-white w-full py-3 pl-9 pr-3 shadow-sm sm:text-sm"
                placeholder="Search for anything..."
                type="text"
                name="search"
                />
                <span
                class="bg-bg-search px-5 flex content-center items-center text-[#fff] cursor-pointer hover:bg-opacity-80 border-2 border-bg-search"
                >Search</span
                >
            </label>
            </div>

            <div class="flex max-w-[250px] w-full justify-between">
            <div class="flex items-center">
                <div>
                <img
                    class="max-w-[30px] mr-3 text-[#fff]"
                    src="/public/images/user.png"
                    alt=""
                />
                </div>
                <div>
                <div>
                    <p class="text-text255 text-xs capitalize">
                    đăng nhập/ đăng ký
                    </p>
                </div>
                <div class="flex items-center justify-start">
                    <p class="text-[#fff] capitalize">
                    tài khoản <i class="fa-solid fa-sort-down"></i>
                    </p>
                </div>
                </div>
            </div>
            <div class="flex items-center">
                <img class="max-w-[30px] mr-2" src="/public/images/cart.png" alt="" />
                <p class="text-[#fff] capitalize text-xs">giỏ hàng</p>
            </div>
            </div>
        </div>
        </section>
        `;
  },
};

export default Header;
