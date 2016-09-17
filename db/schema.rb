# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160917082319) do

  create_table "addresses", force: :cascade do |t|
    t.integer  "order_id"
    t.string   "country"
    t.string   "town"
    t.string   "zip"
    t.string   "address"
    t.string   "address2"
    t.string   "nova_poshta_id"
    t.text     "notes"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.string   "user_name",      default: "", null: false
    t.string   "user_phone",     default: "", null: false
    t.string   "user_email",     default: "", null: false
  end

  add_index "addresses", ["order_id"], name: "index_addresses_on_order_id"

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.integer  "parent_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories_products", id: false, force: :cascade do |t|
    t.integer "category_id", null: false
    t.integer "product_id",  null: false
  end

  create_table "invoice_items", force: :cascade do |t|
    t.integer  "order_id",               null: false
    t.integer  "product_id",             null: false
    t.string   "color"
    t.string   "size"
    t.decimal  "price",                  null: false
    t.integer  "count",      default: 1
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "invoice_items", ["order_id", "product_id"], name: "index_invoice_items_on_order_id_and_product_id"
  add_index "invoice_items", ["order_id"], name: "index_invoice_items_on_order_id"

  create_table "orders", force: :cascade do |t|
    t.decimal  "subtotal"
    t.decimal  "total"
    t.decimal  "discount"
    t.integer  "address_id"
    t.integer  "user_id"
    t.integer  "shipping_id"
    t.datetime "created_at",                                    null: false
    t.datetime "updated_at",                                    null: false
    t.string   "payment_type", default: "Оплата при получении", null: false
    t.string   "order_status", default: "В ожидании",           null: false
  end

  add_index "orders", ["user_id"], name: "index_orders_on_user_id"

  create_table "photos", force: :cascade do |t|
    t.string   "image"
    t.integer  "product_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "products", force: :cascade do |t|
    t.string   "name",                          null: false
    t.text     "description"
    t.string   "permalink"
    t.decimal  "price"
    t.text     "sizes"
    t.text     "colors"
    t.decimal  "sale_price"
    t.boolean  "has_popular"
    t.boolean  "has_sale"
    t.boolean  "in_stock",       default: true
    t.integer  "quantity"
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.integer  "cover_photo_id"
    t.text     "sizes_setka"
  end

  create_table "shippings", force: :cascade do |t|
    t.string   "name"
    t.decimal  "price"
    t.string   "speed_of_delivery"
    t.boolean  "is_international"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

end
