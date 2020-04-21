require 'test_helper'

class RemediesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @remedy = remedies(:one)
  end

  test "should get index" do
    get remedies_url, as: :json
    assert_response :success
  end

  test "should create remedy" do
    assert_difference('Remedy.count') do
      post remedies_url, params: { remedy: { description: @remedy.description, mood: @remedy.mood, title: @remedy.title } }, as: :json
    end

    assert_response 201
  end

  test "should show remedy" do
    get remedy_url(@remedy), as: :json
    assert_response :success
  end

  test "should update remedy" do
    patch remedy_url(@remedy), params: { remedy: { description: @remedy.description, mood: @remedy.mood, title: @remedy.title } }, as: :json
    assert_response 200
  end

  test "should destroy remedy" do
    assert_difference('Remedy.count', -1) do
      delete remedy_url(@remedy), as: :json
    end

    assert_response 204
  end
end
