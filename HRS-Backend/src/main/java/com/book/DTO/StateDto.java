package com.book.DTO;

public class StateDto {
    private String code;
    private String name;
    public StateDto(){
    	
    }
	public StateDto(String code, String name) {
		super();
		this.code = code;
		this.name = name;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

    // Getters and Setters
}